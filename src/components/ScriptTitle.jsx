/**
 * The Rage Italic project titles. Figma paints them as white glyphs on a 2px
 * purple → cyan *outside* stroke, so the stroke is a separate layer underneath
 * the white fill (CSS strokes are centred, hence 4px).
 *
 * As with DisplayTitle, `className` styles the outer element and the stroke is
 * anchored to an inner inline-block that shrink-wraps the text.
 */
export default function ScriptTitle({ children, className = '' }) {
  return (
    <h3 className={`font-script ${className}`}>
      <span className="script-title">
        <span className="script-title__stroke-base" aria-hidden="true">
          {children}
        </span>
        <span className="script-title__stroke" aria-hidden="true">
          {children}
        </span>
        <span className="script-title__fill">{children}</span>
      </span>
    </h3>
  );
}
