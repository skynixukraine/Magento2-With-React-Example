# Entrance
### Attention: This is a code sample and an example of how to connect your favourite React application to your Magento e-commerce
### This code sample is not a working example and can be used only for studing the case
# Getting Started
###### Magento2 with React example application
## New installation instructions

### 1 Clone Docker Compose repo
```bash
1. git clone ssh://git@bitbucket.skynix.co/...
```

### 2 Deploy architecture locally
```bash
1. ./start.sh up app
```

## Deveopment process instructions
### Running the application in browser
```bash
0. Open a new terminal window/tab
1. cd src/app
2. git checkout <your branch>
3. npm i
4. npm run dev
```
Now open in browser http://localhost:3000/react/magento

### Running unit tests

```bash
1. cd src/mrp
2. npm run test
```
In case if compoent UI were changed, update test snapshot by running:
```bash
1. npm run test-rebuild
```

### Running acceptance tests

```bash
1. ./start.sh runtests app
```

### GIT
Commit and Push code on the local PC, folder src/app
