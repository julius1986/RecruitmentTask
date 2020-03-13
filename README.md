# Recruitment test 

## Tasks

1. Fetch and display table of companies, table should have `id, name, city, total income (sum of company incomes), average income (average of company incomes), last month income (sum of last month incomes) columns.
2. You should create your own implementation of table. Bootstrap, antD... it is not allowed.
3. Implement sorting, first click on the column header should sort table asceding order by given column, second click by descending order.
4. There should be input that we can filter the result of the table by all fields.
5. Table should be paginated.
6. App should be responsive (It should work well on both desktop as well as on smaller devices such as mobile phones, tablets)
7. Project should contain full documentation (eg. readme)

## About

This application fetches data from server, calculates and creates the table. You can use functions as:
- sort by column (click on column)
- filter by value (filtering data in all fields)
- pagination

## Install

Open your terminal(powershell), go to some directory using command "cd someFolder" and follow steps:

1. git clone https://github.com/julius1986/RecruitmentTask
2. cd RecruitmentTask
3. npm i 

## Run application

- npm run start - run application
- npm run doc - create a documentation in root catalog (doc folder)

> If you have a problem with docs, please install global package "parcel-bundler"
> npm i -g parcel-bundler  

## Notes.

In master branch I use flexbox. But you can change branch on dev, there I created a simple grid.
For this, at first you have to install application, then write in powershell:

>git checkout dev
>npm i
>npm run start
