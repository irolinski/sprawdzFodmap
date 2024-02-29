DROP TABLE IF EXISTS "recipes_db";

CREATE TABLE IF NOT EXISTS "recipes_db" (
    "name" VARCHAR(40),
    "prep_time" INT,
    "amount" VARCHAR(30),
    "equipment" VARCHAR(120),
    "categories" VARCHAR(100) [],
    "description" VARCHAR(500),
    "recipe_text" VARCHAR(1000),
    "photo" VARCHAR(1000),
    "author" VARCHAR(40) DEFAULT 'anonymous',
    "date" DATE,
    "ratings" integer [],
    "ingredient_1_name" VARCHAR(60),
    "ingredient_1_amount" VARCHAR(30),
    "ingredient_2_name" VARCHAR(60),
    "ingredient_2_amount" VARCHAR(30),
    "ingredient_3_name" VARCHAR(60),
    "ingredient_3_amount" VARCHAR(30),
    "ingredient_4_name" VARCHAR(60),
    "ingredient_4_amount" VARCHAR(30),
    "ingredient_5_name" VARCHAR(60),
    "ingredient_5_amount" VARCHAR(30),
    "ingredient_6_name" VARCHAR(60),
    "ingredient_6_amount" VARCHAR(30),
    "ingredient_7_name" VARCHAR(60),
    "ingredient_7_amount" VARCHAR(30),
    "ingredient_8_name" VARCHAR(60),
    "ingredient_8_amount" VARCHAR(30),
    "ingredient_9_name" VARCHAR(60),
    "ingredient_9_amount" VARCHAR(30),
    "ingredient_10_name" VARCHAR(60),
    "ingredient_10_amount" VARCHAR(30),
    "ingredient_11_name" VARCHAR(60),
    "ingredient_11_amount" VARCHAR(30),
    "ingredient_12_name" VARCHAR(60),
    "ingredient_12_amount" VARCHAR(30),
    "ingredient_13_name" VARCHAR(60),
    "ingredient_13_amount" VARCHAR(30),
    "ingredient_14_name" VARCHAR(60),
    "ingredient_14_amount" VARCHAR(30),
    "ingredient_15_name" VARCHAR(60),
    "ingredient_15_amount" VARCHAR(30),
    "verified" BOOLEAN DEFAULT FALSE,
    "id" SERIAL
);

-- INSERT INTO "recipes_db" VALUES ('ŚWIĄTECZNE PIERNICZKI', 60, ARRAY[ 'gałka muszkatałowa', '¾ szklanki/165g masła, zmiękczonego' ], '2 miski', 'piekarnik, babka ptasznik', ARRAY['śniadanie'], 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quos exercitationem, modi odio ad sequi natus nesciunt accusantium? Earum, molestiae incidunt! Tempore illo error ab accusantium excepturi ad natus sunt!', 'W dużej misce za pomocą ręcznego miksera ubij masło, brązowy cukier i melasę na puszystą masę. Dodaj jajko i wanilię i ubijaj, aż się dokładnie połączą. W drugiej misce wymieszaj mąkę, przyprawy, sodę oczyszczoną i sól. Z mikserem włączonym na niskie obroty do mokrej masy, powoli dodawaj suche składniki. Przygotowane ciasto podziel na pół i utwórz dwa krążki. Zawiń każdy w folię i schłódź przez około 2 do 3 godzin. Rozgrzej piekarnik do 180°C i wyłóż dwie blachy papierem do pieczenia. Umieść jeden krążek ciasta na lekko posypaną mąką powierzchnię i rozwałkuj do grubości 0,5 cm. Wytnij ciastka za pomocą foremek do pierników i przenieś na blaszkę do pieczenia. Piecz przez 9 do 10 minut, aż lekko się podniosą i zarumienią. Ciastka należy schłodzić do całkowicie ostygnięcia przed przełożeniem do pojemnika. Po ostudzeniu przechowuj pierniczki w zamkniętym pojemniku lub puszce.', 'https://dietetyka.salvita.pl/wp-content/uploads/2021/12/11-770x420.png', ARRAY[5, 2, 5, 5, 5, 4, 4, 5, 1, 2], '2020-05-12'),
-- ('KURCZAK TAJLANDZKI', 45, ARRAY[ '150g filetu z kurczaka', '1 szklanka ryżu basmati', '2 marchewki', '1 cukinia', 'Sól, pieprz i oliwa z oliwek'], '1 porcja', 'patelnia', ARRAY['obiad', 'mięso'],'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quos exercitationem, modi odio ad sequi natus nesciunt accusantium? Earum, molestiae incidunt! Tempore illo error ab accusantium excepturi ad natus sunt!', 'Podgrzewaj piekarnik do 200°C. Następnie umyj filet z kurczaka i przypraw go solą i pieprzem. Umieść kurczaka na blasze do pieczenia i piecz przez 20-25 minut, lub do momentu, gdy jest w pełni ugotowany. Podczas gdy kurczak się piecze, ugotuj ryż zgodnie z instrukcjami na opakowaniu. Umyj i pokrój marchewki i cukinię na kawałki o grubości około 1 cm. Na patelni rozgrzej oliwę z oliwek i smaż warzywa przez 5-7 minut, aż będą miękkie. Po ugotowaniu wszystkich składników, na talerzu ułóż ryż, pieczony kurczak i warzywa. To pyszny i sycący obiad, który jest zgodny z dietą Low FODMAP i może być łatwo dostosowany do indywidualnych upodobań poprzez zmianę warzyw lub przypraw. Smacznego!', 'https://royalmenu.pl/wp-content/uploads/2023/05/kurczak-z-ryzem-low-fodmap-przepis-podanie-2023-05-15.jpg', ARRAY[4, 3, 5, 5, 2, 4, 4, 2, 1, 2], '2022-01-21');



-- UNNEST can unnest arrays :) 