# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Materials so far:
- [x] let
- [x] const
- [x] var
- [x] destructing 
- [x] spread

- [x] arrow functions
- [] template literals
- [x] this keyword
- [x] modules
- [x] async 
- [ ] promises - async/await

## Provider entity/ui contain fields:
- first name, text
- last name, text 
- description, text area
- price, text - decimal mask
- role, enum - dropdown
- address, search with dropdown
- latitude
- longitude
- image, upload btn

- create text, text area, dropdown, suggestion components, image upload

- [x] hardcode client id (it will be loaded during auth process)
- [x] try to extract image loading in separate store method and reuse it
- [ ] extract axios config in separate configutaion:> [!WARNING]
- [ ] add minimal price to provider profile, add fetching of medic rules
- [ ] add list of events for each client, current, upcoming...
- [x] create ui for terms
- [ ] term should have time (maybe in future add multi day)
- [x] term should have required medical personnel
- [x] price per hour 
- [x] add mask for price field, either create custom input for time or use it how it is 
- [ ] add list of task items (be able to delete (only past ones, be able to cancel event))
- [ ] add navigation
- [ ] address autocomplete should display latest value
- [ ] finish saving of events with terms 

