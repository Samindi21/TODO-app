CREATE TABLE IF NOT EXISTS todolist1 (
    id INT AUTO_INCREMENT, 
    firstName VARCHAR(255), 
    lastName VARCHAR(255), 
    PRIMARY KEY(id)
);

INSERT INTO todolist1 (firstName, lastName) VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Alice', 'Johnson'),
('Bob', 'Williams'),
('Charlie', 'Brown');
