/**
 * The Pricedown headings ("Anshu Kushwah", "Experience", "Top II projects"…).
 * Figma draws them as white glyphs on a solid black outside stroke, which the
 * CSS panel doesn't export — hence the explicit stroke layer.
 *
 * `className` styles the outer element (position, size, alignment). The stroke
 * is positioned against an inner inline-block so the two layers stay locked
 * together regardless of what the caller does to the outside.
 *
 * `stroke` is the outside width in px, matching the Figma value.
 */
export default function DisplayTitle({
  as: Tag = 'h2',
  children,
  className = '',
  stroke = 4,
  style,
}) {
  return (
    <Tag className={`font-display ${className}`} style={style}>
      <span className="display-title" style={{ '--stroke': `${stroke}px` }}>
        <span className="display-title__stroke" aria-hidden="true">
          {children}
        </span>
        <span className="display-title__fill">{children}</span>
      </span>
    </Tag>
  );
}
