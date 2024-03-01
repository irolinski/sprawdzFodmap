DROP TABLE IF EXISTS "dummy_db";

CREATE TABLE IF NOT EXISTS "dummy_db" (
    "id" SERIAL PRIMARY KEY, 
    "name" TEXT,
    "sub_title" TEXT,
    "fodmap_mon" TEXT,
    "max_use" TEXT,
    "category" TEXT,
    "histamine" TEXT,
    "notes" TEXT
);
INSERT INTO "dummy_db" VALUES ('Miód malinowy',NULL,'low','2 łyżki','cukry','high','f_001',NULL),
	('Miód koniczynowy',NULL,'low','2 łyżki','cukry','low','f_002',NULL),
	('Miód z bawełny',NULL,'low','2 łyżki','cukry','mid','f_003',NULL),
	('Fasolka po bretońsku',NULL,'high',NULL,'straczki','high','f_195',NULL),
	('Fasola czarna','(gotowana oraz z puszki)','high',NULL,'straczki',NULL,'f_196','W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych.'),
	('Fasola żurawinowa','(z puszki)','high',NULL,'straczki','mid','f_197','W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych.'),
	('Fasola biała półksiężycowata','(z puszki)','mid','35g','straczki',NULL,'f_198','W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych.'),
	('Ciecierzyca Chana Dal','(gotowana)','low',NULL,'straczki',NULL,'f_199','W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych.');
