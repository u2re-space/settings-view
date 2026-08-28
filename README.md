# settings-view

Настройки, не привязанные к оболочке. View id: **`settings`**.

Секции хаба, вкладки sibling-SKU, AI / тема / сетка / платформа. Вкладки собирает `settings-contributions` + subsystem. Стили — `settings-styles-attach` (без второго `:root` палитра).

Контракт-тесты: `npm run test:contracts`.

## Запуск

```bash
cd modules/views/settings-view
npm run dev
npm run test:contracts
npm run build
```

```ts
import { createSettingsView } from "settings-view/src";
```
