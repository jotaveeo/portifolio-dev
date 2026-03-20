# Frontend Design System

Tokens e padrões visuais para todos os projetos frontend.

## Tipografia

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-sans` | 'Inter', 'Plus Jakarta Sans', system-ui | Body text |
| `--font-mono` | 'JetBrains Mono', 'Fira Code', monospace | Código, dados |
| `--text-xs` | 0.75rem (12px) | Captions, badges |
| `--text-sm` | 0.875rem (14px) | Secundário, labels |
| `--text-base` | 1rem (16px) | Body |
| `--text-lg` | 1.125rem (18px) | Subtítulos |
| `--text-xl` | 1.25rem (20px) | Títulos de seção |
| `--text-2xl` | 1.5rem (24px) | Títulos de página |
| `--text-3xl` | 2rem (32px) | Heroes |
| `--text-4xl` | 3rem (48px) | Landing heroes |

## Espaçamento

Escala de 4px:

| Token | Valor |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |

## Cores (padrão Light)

```css
:root {
  --color-background: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-accent: #7C3AED;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
  --color-text: #1E293B;
  --color-text-secondary: #64748B;
  --color-text-muted: #94A3B8;
  --color-border: #E2E8F0;
  --color-border-hover: #CBD5E1;
}
```

## Sombras

```css
--shadow-sm: 0 1px 2px hsl(0 0% 0% / 0.05);
--shadow-md: 0 4px 6px hsl(0 0% 0% / 0.07);
--shadow-lg: 0 10px 15px hsl(0 0% 0% / 0.1);
--shadow-xl: 0 20px 25px hsl(0 0% 0% / 0.1);
```

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, tags |
| `--radius-md` | 6px | Inputs, buttons |
| `--radius-lg` | 8px | Cards |
| `--radius-xl` | 12px | Modais |
| `--radius-2xl` | 16px | Containers grandes |
| `--radius-full` | 9999px | Avatares, pills |

## Breakpoints

| Nome | Valor | Uso |
|------|-------|-----|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop wide |
| `2xl` | 1536px | Ultra wide |

## Transições

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
--transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

## Regras de uso

- **Sempre usar tokens, nunca valores hardcoded**
- Mobile-first (estilos base para mobile, media queries para desktop)
- Consistência > criatividade (use os tokens, não invente novos)
- Dark mode via CSS variables (override de cores em `.dark`)
