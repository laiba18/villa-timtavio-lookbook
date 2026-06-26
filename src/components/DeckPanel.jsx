import { MediaIcon } from './Icons';
import { mediaSource } from '../lib/mediaAssets';

function Headline({ text, style }) {
  const lines = text.split('\n');
  return (
    <h2 className="deck-headline" style={style}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </h2>
  );
}

function PanelMedia({ media, variant, className, fit = 'contain', priority = false, shouldLoad = true }) {
  if (!media || !shouldLoad) return null;

  const src = mediaSource(media, variant);
  if (!src) return null;

  const fillClass = fit === 'cover' ? ' media-fill' : '';

  if (media.resourceType === 'video') {
    return (
      <video
        className={`${className}${fillClass}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? 'auto' : 'metadata'}
      />
    );
  }

  return (
    <img
      className={`${className}${fillClass}`}
      src={src}
      alt=""
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}

function BackgroundMedia({ media, variant, priority, shouldLoad }) {
  if (!media || !shouldLoad) return null;

  const src = mediaSource(media, variant);
  if (!src) return null;

  return (
    <img
      className="deck-panel-bg-img"
      src={src}
      alt=""
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      aria-hidden="true"
    />
  );
}

function GalleryPanel({ panel, isNearActive }) {
  return (
    <div className="deck-panel is-gallery">
      {panel.columns.map((col, i) => (
        <div key={i} className="gallery-col">
          {col.media ? (
            <PanelMedia
              media={col.media}
              variant="gallery"
              fit={col.fit || 'cover'}
              className="gallery-col-media"
              priority={isNearActive}
              shouldLoad={isNearActive}
            />
          ) : (
            <div className="gallery-col-bg" style={{ background: col.bg }} />
          )}
          {!col.media && col.kind && (
            <div className="gallery-col-label">
              <MediaIcon name={col.icon} size={22} style={{ color: 'rgba(255,255,255,0.45)' }} />
              <div className="deck-media-kind">{col.kind}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MediaContent({ panel }) {
  const hasMedia = Boolean(panel.media);
  const isFill = panel.mediaFit === 'cover';

  if (isFill && !panel.caption) return null;

  return (
    <>
      {!hasMedia && panel.icon && <MediaIcon name={panel.icon} className="deck-media-icon" />}
      {panel.headline && <Headline text={panel.headline} style={panel.headlineStyle} />}
      {!hasMedia && panel.kind && (
        <div className="deck-media-kind" style={panel.kindStyle}>
          {panel.kind}
        </div>
      )}
      {panel.caption && (
        <div className={`deck-media-caption${isFill ? ' deck-media-caption--fill' : ''}`}>
          {panel.caption}
        </div>
      )}
    </>
  );
}

export default function DeckPanel({ panel, isActive = false, isNearActive = false }) {
  if (panel.variant === 'gallery') {
    return <GalleryPanel panel={panel} isNearActive={isNearActive} />;
  }

  const classNames = ['deck-panel'];
  if (panel.variant === 'media') {
    classNames.push('is-media');
    if (panel.mediaFit === 'cover') classNames.push('is-fill');
  }
  if (panel.variant === 'vertical') {
    classNames.push('is-vertical');
    if (panel.mediaFit === 'cover') classNames.push('is-fill');
  }
  if (panel.variant === 'closing') classNames.push('is-center');

  const mediaFit = panel.mediaFit || 'contain';
  const mediaClass = panel.variant === 'vertical' ? 'vt-media' : 'deck-panel-media';
  const shouldLoad = isNearActive || Boolean(panel.preload);
  const priority = isActive || Boolean(panel.preload);
  const hasBgImage = Boolean(panel.bgMedia);

  return (
    <div className={classNames.join(' ')}>
      {panel.bg && (!hasBgImage || !shouldLoad) && (
        <div className="deck-panel-bg" style={{ background: panel.bg }} />
      )}

      {hasBgImage && (
        <BackgroundMedia
          media={panel.bgMedia}
          variant="cover"
          priority={priority}
          shouldLoad={shouldLoad}
        />
      )}

      {panel.media && (panel.variant === 'media' || panel.variant === 'vertical') ? (
        <PanelMedia
          media={panel.media}
          variant={panel.variant === 'vertical' && mediaFit !== 'cover' ? 'vertical' : 'cover'}
          fit={mediaFit}
          className={mediaClass}
          priority={priority}
          shouldLoad={shouldLoad}
        />
      ) : !hasBgImage && !panel.bg ? (
        <div className="deck-panel-bg" />
      ) : null}

      {panel.media &&
        (panel.variant === 'vertical' || panel.variant === 'media') &&
        panel.mediaFit === 'cover' && (
        <div
          className="deck-panel-overlay"
          style={{
            background:
              'linear-gradient(0deg, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0) 40%)',
          }}
        />
      )}

      {panel.overlay && (
        <div className="deck-panel-overlay" style={{ background: panel.overlay }} />
      )}

      <div className="deck-panel-content" style={panel.contentStyle}>
        {panel.variant === 'cover' && (
          <>
            <div className="deck-eyebrow">{panel.eyebrow}</div>
            <h1 className="deck-headline">
              {panel.headline.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="deck-body">{panel.body}</p>
            {panel.coverCue && (
              <div className="deck-cover-cue">
                <div className="deck-cover-cue-line" />
                <span className="deck-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Begin the walkthrough
                </span>
              </div>
            )}
          </>
        )}

        {panel.variant === 'text' && (
          <>
            <Headline text={panel.headline} />
            <p className="deck-body">{panel.body}</p>
          </>
        )}

        {(panel.variant === 'media' || panel.variant === 'vertical') && (
          <MediaContent panel={panel} />
        )}

        {panel.variant === 'closing' && (
          <>
            <div className="deck-eyebrow">{panel.eyebrow}</div>
            <Headline text={panel.headline} style={panel.headlineStyle} />
          </>
        )}
      </div>
    </div>
  );
}
