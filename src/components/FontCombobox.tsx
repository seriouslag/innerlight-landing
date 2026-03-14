import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import type { FontOption } from '../utils/fonts';
import { ALL_FONTS, findFontByCssValue } from '../utils/fonts';
import { loadFont } from '../utils/loadFont';
import '../fontcombobox.css';

const CATEGORY_LABELS: Record<FontOption['category'], string> = {
  serif: 'Serif',
  'sans-serif': 'Sans Serif',
  display: 'Display',
  handwriting: 'Handwriting',
  monospace: 'Monospace',
};

const CATEGORY_ORDER: FontOption['category'][] = [
  'serif',
  'sans-serif',
  'display',
  'handwriting',
  'monospace',
];

interface FontComboboxProps {
  /** Current CSS font-family value, e.g. "'Playfair Display', Georgia, serif" */
  value: string;
  onChange: (cssValue: string) => void;
}

/** Searchable font picker that dynamically loads Google Fonts on demand. */
export function FontCombobox({ value, onChange }: FontComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const selectedFont = findFontByCssValue(value);
  const selectedLabel = selectedFont?.family ?? value;

  const filtered = search.trim()
    ? ALL_FONTS.filter((f) => f.family.toLowerCase().includes(search.toLowerCase()))
    : ALL_FONTS;

  function openDropdown() {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        left: rect.left,
        width: Math.max(rect.width, 220),
      });
    }
    setIsOpen(true);
    setSearch('');
    // Defer focus so portal has rendered
    setTimeout(() => searchRef.current?.focus(), 16);
  }

  function close() {
    setIsOpen(false);
    setSearch('');
  }

  function selectFont(cssValue: string, family: string) {
    loadFont(family);
    onChange(cssValue);
    close();
  }

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node;
      const outsideTrigger = triggerRef.current && !triggerRef.current.contains(target);
      const outsideDropdown = dropdownRef.current && !dropdownRef.current.contains(target);
      if (outsideTrigger && outsideDropdown) close();
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Preload the currently selected font whenever value changes
  useEffect(() => {
    if (selectedFont) loadFont(selectedFont.family);
  }, [value, selectedFont]);

  // Grouped or flat list depending on search state
  let listContent: React.ReactNode;
  if (search.trim()) {
    if (filtered.length === 0) {
      listContent = <div className="font-combobox-empty">No fonts found</div>;
    } else {
      listContent = filtered.map((font) => (
        <FontItem
          key={font.cssValue}
          font={font}
          selected={font.cssValue === value}
          onSelect={selectFont}
        />
      ));
    }
  } else {
    listContent = CATEGORY_ORDER.map((cat) => {
      const fonts = ALL_FONTS.filter((f) => f.category === cat);
      return (
        <div key={cat}>
          <div className="font-combobox-group-label">{CATEGORY_LABELS[cat]}</div>
          {fonts.map((font) => (
            <FontItem
              key={font.cssValue}
              font={font}
              selected={font.cssValue === value}
              onSelect={selectFont}
            />
          ))}
        </div>
      );
    });
  }

  const dropdown = (
    <div
      ref={dropdownRef}
      className="font-combobox-dropdown"
      style={{
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: dropdownPos.width,
      }}
    >
      <div className="font-combobox-search-wrapper">
        <input
          ref={searchRef}
          type="text"
          className="font-combobox-search"
          placeholder="Search fonts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="font-combobox-list">{listContent}</div>
    </div>
  );

  return (
    <div className="font-combobox">
      <button
        ref={triggerRef}
        className={`font-combobox-trigger${isOpen ? ' open' : ''}`}
        onClick={isOpen ? close : openDropdown}
        type="button"
        style={{ fontFamily: value }}
        title={selectedLabel}
      >
        <span className="font-combobox-trigger-label">{selectedLabel}</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s ease',
            flexShrink: 0,
          }}
        />
      </button>

      {isOpen && createPortal(dropdown, document.body)}
    </div>
  );
}

// ─── Font list item ──────────────────────────────────────────────────────────

interface FontItemProps {
  font: FontOption;
  selected: boolean;
  onSelect: (cssValue: string, family: string) => void;
}

/**
 * Renders a single font option. Uses IntersectionObserver to load the font
 * only when the item scrolls into view, keeping network requests minimal.
 */
function FontItem({ font, selected, onSelect }: FontItemProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadFont(font.family);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [font.family]);

  return (
    <button
      ref={ref}
      className={`font-combobox-item${selected ? ' selected' : ''}`}
      onClick={() => onSelect(font.cssValue, font.family)}
      type="button"
      style={{ fontFamily: font.cssValue }}
    >
      {font.family}
    </button>
  );
}
