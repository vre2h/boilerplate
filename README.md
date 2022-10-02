# Onex Admin Panel

## Branching strategy

Use Git Flow branching [strategy](https://www.flagship.io/git-branching-strategies/).

## Commit strategy

Use commitizen strategy for all commits

![https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png](https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png)

## Folder structure

- `/assets`
    - `/images`
    - `/fonts`
- `constants` - different constants: like button types, theme types
- `hooks` - custom hooks
- `services` - api and other integrations
- `components`
    - `general` - buttons, dropdowns
    - `sections` - parts that pages consist of
    - `display` - statistics
- `helpers` - not important helper functions
- `pages` - routes
- `libs` - lib integrations

## Commands

- See `package.json` for sections