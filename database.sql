-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- fs-react-shopping -- 

CREATE TABLE "shopping_list"
("name" VARCHAR(80) NOT NULL,
 "quantity" FLOAT DEFAULT 1, 
 "unit" VARCHAR(20) NOT NULL);

INSERT INTO "shopping_list" 
("name", "quantity", "unit")
VALUES ('apples', 5, 'lbs'),
       ('bread', 1, 'loaf'), 
       ('milk', 1, 'gallon'), 
       ('sliced almonds', 2, 'cups'),
       ('bananas', 1, 'bunch');