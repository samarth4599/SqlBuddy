# 🤖 SQL Buddy

## 📚 Overview

_Note : Although there is no proper query validation added, User can run any query as long as it is fetching from the available tables._

This is a SQL editor to write and execute your queries. Run your query by clicking on **Execute** and get the results displayed in table format. User can also clear the query with **Clear** button and see the list of tables from **Available Table** button. Only 15 rows are generated at a time and the user can click on **Load More** to get the next 15 set of rows. **Export** will download the current set of data in csv format.

All successfull queries are shown in **History** section. User can tap on any query in history list to quickly call that data. History can also be cleared using **Clear** button. User can also change the **Theme** by clicking on theme toggle button on top right corner. This website is fully **Responsive** and can be run on both large and small devices.

## 👾 Example Queries

1. `SELECT * FROM Customers`
2. `SELECT * FROM Categories`
3. `SELECT * FROM Orders;`

## 👨‍💻 Live Demo

<a href="https://github.com/samarth4599/sqlbuddy" target="blank">
Github
</a>

Try out the website : [SQL Buddy](https://sqlbuddy-sage.vercel.app/)

## 😎 Tech Stack

![Next JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ⚙️ Dependencies

- **_@uiw/react-codemirror_** - For code editor to write queries.
- **_react-csv-downloader_** - To download displayed data in CSV format.
- **_react-papaparse_** - To Parse CSV data coming from API.
- **_react-toastify_** - To display Error and Info toasts.
- **_zustand_** - For lightweight state management.
- **_husky_** - For pre-commit hooks.

## ⏱ Page Load Time

Website performance

(src/assets/website_performance.PNG)

Mobile performance

(src/assets/mobile_performance.PNG)

## 🥷 Optimization Steps

- Used Lighthouse DevTools Extension to find the performance issues and fix them as suggested.
- Used React hooks - memo, useMemo and useCallback to prevent unnecessary re-renders and increased performance.
