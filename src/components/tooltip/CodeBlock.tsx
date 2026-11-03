import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import { useLocale } from "../../hooks/useLocale";
import { useTheme } from "../../hooks/useTheme";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const { t } = useLocale();
  const prismTheme = theme === "light" ? themes.github : themes.nightOwl;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard indisponível - ignora silenciosamente
    }
  }

  return (
    <div className="group relative rounded-md border border-slate-700/60 light:border-slate-200 bg-surface-sunken">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-2 top-2 z-10 rounded-sm border border-slate-700/60 light:border-slate-300 bg-slate-900/80 light:bg-white/90 p-1 text-slate-400 light:text-slate-600 opacity-0 transition-opacity hover:text-accent-text-strong group-hover:opacity-100"
        aria-label={t.copyCode}
        title={copied ? t.copiedCode : t.copyCode}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
      <Highlight code={code.trim()} language="tsx" theme={prismTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto rounded-md p-3 text-[12.5px] leading-relaxed`}
            style={{ ...style, backgroundColor: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
