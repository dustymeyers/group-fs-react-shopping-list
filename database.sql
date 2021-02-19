-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- fs-react-shopping -- 
-- fs-react-shopping -- 

DROP TABLE "shopping_list";

CREATE TABLE "shopping_list"
("id" SERIAL PRIMARY KEY,
 "name" VARCHAR(80) NOT NULL,
 "quantity" FLOAT DEFAULT 1, 
 "unit" VARCHAR(20) NOT NULL, 
 "purchased" BOOLEAN DEFAULT FALSE);

INSERT INTO "shopping_list" 
("name", "quantity", "unit")
VALUES ('apples', 5, 'lbs'),
       ('bread', 1, 'loaf'), 
       ('milk', 1, 'gallon'), 
       ('sliced almonds', 2, 'cups'),
       ('bananas', 1, 'bunch');

SELECT * FROM "shopping_list" ORDER BY "purchased"=FALSE DESC, "name" ASC;