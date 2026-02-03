This project uses a design token system defined in variables.css to keep styles consistent and make theming easier.

## Token Layers ##

Primitive tokens store raw values and are not used directly in components:

Colors (e.g. neutral shades, accent color)

Semantic tokens describe how a value is used in the UI:

--color-bg

--color-text

--color-border

--color-accent

--nav-bg

--surface-glass

Components reference semantic tokens so they automatically adapt to theme changes.

## Light & Dark Themes ##

Themes are controlled using a data-theme attribute on the <html> element:

:root[data-theme="light"] { ... }
:root[data-theme="dark"] { ... }


Light theme is the default

Dark theme overrides only semantic tokens

Components update automatically without duplicated styles

##Spacing & Typography Tokens##

Spacing tokens use rem units for responsive scaling:

--space-xs through --space-xxxl

Typography tokens define global font usage:

--font-display (Playfair Display)

--font-body (Inter)

Benefits

- Consistent design across pages

- Simple light/dark theme switching

- Easier maintenance and scalability

- Clear separation of design intent and implementation

## ♿ Reduced Motion Support ##

The site respects user motion preferences using:

@media (prefers-reduced-motion: reduce)


Decorative animations and transitions are reduced or removed, while functional motion (focus states and keyboard navigation) is preserved.
