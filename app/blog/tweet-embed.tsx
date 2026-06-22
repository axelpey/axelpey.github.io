"use client";

import { useEffect, useMemo, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

const TWITTER_WIDGET_SCRIPT_URL = "https://platform.twitter.com/widgets.js";

function normalizeTweetUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "x.com") {
      parsedUrl.hostname = "twitter.com";
    }

    parsedUrl.pathname = parsedUrl.pathname.replace(/\/video\/\d+$/, "");

    return parsedUrl.toString();
  } catch {
    return url;
  }
}

function loadTwitterWidgets(onLoad: () => void) {
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${TWITTER_WIDGET_SCRIPT_URL}"]`
  );

  if (existingScript) {
    if (window.twttr?.widgets) {
      onLoad();
      return undefined;
    }

    existingScript.addEventListener("load", onLoad, { once: true });
    return () => existingScript.removeEventListener("load", onLoad);
  }

  const script = document.createElement("script");
  script.src = TWITTER_WIDGET_SCRIPT_URL;
  script.async = true;
  script.charset = "utf-8";
  script.onload = onLoad;
  document.body.appendChild(script);

  return () => {
    script.onload = null;
  };
}

export function TweetEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweetUrl = useMemo(() => normalizeTweetUrl(url), [url]);

  useEffect(() => {
    const renderEmbed = () => {
      window.twttr?.widgets?.load(containerRef.current);
    };

    renderEmbed();
    return loadTwitterWidgets(renderEmbed);
  }, [tweetUrl]);

  return (
    <div ref={containerRef} className="not-prose my-8 flex justify-center">
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
        <a href={tweetUrl}>View on X</a>
      </blockquote>
    </div>
  );
}
