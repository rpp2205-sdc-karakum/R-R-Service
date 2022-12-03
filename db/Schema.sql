create database REV;
USE REV;

CREATE TABLE `characteristics` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `name` text
);

CREATE TABLE `reviews` (
  `review_id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `rating` int,
  `date` datetime,
  `summary` text,
  `body` text,
  `recomended` boolean,
  `reported` boolean,
  `name` text,
  `email` text,
  `response` text,
  `helpfullness` int
);

CREATE TABLE `charRev` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `charid` int,
  `revid` int,
  `value` int,
  foreign key (charid) references characteristics(id),
  foreign key (revid) references reviews(review_id)
);

CREATE TABLE `photos` (
  `photo_id` int PRIMARY KEY AUTO_INCREMENT,
  `review_id` int,
  `url` text,
  foreign key (review_id) references reviews(review_id)
);


