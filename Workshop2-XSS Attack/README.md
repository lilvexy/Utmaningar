# Case
Du blir kontaktat av företaget Credulous Web Devs som är en liten webbyrå som inte kan så mycket om säkerhet. Det kan däremot du/ditt företag (White Hat Elite). Credulus Web Devs har just börjat utveckla en sajt till en kund och beskriver den så här:

Vi håller på med en sajt till en kund i vilken det finns inloggning och två användarroller - user och superadmin.
Tanken är att alla användare som registrerar sig får användarrollen “user”, men att det också finns en “superadmin” user role. “Superadmin”-rollen får tillgång till alla information i databasen, medan “user”-rollen har begränsad åtkomst (liksom oinloggade användare).
Vi har gjort en hel del arbete på backend, men än så länge finns det inte så mycket klart på frontend utom att vanliga users kan registrera sig, samt att alla registrerade användare kan logga in.
Det finns en superadmin i databasen och alla superadmins kan se en lista över alla användare direkt när de loggar in. Nuvarande superadmin har användarnamn anna.larsson@gmail.com och lösenord: 12345678
Vi har förberett en REST-route PUT /api/edit-my-user-info så att en användare ska kunna ändra sina egna användaruppgifter, men har inte lagt till detta i frontend än.

Sedan frågar de:

Vi undrar om ni kan hjälpa oss kontrollera om det här är ett säkert system eller om någon med användarrollen user (vanlig användare som registrerar sig) skulle kunna sänka/hacka systemet så att det inte går att använda för en superadmin eller så att de själva lyckas bli superadmins.”
Spelregler
Håll dig till dessa spelregler:

Givetvis vill de inte låta dig se källkoden. (I ett verkligt case hade du oftast bara fått en länk till en utvecklingsserver, men du får faktiskt källkoden att göra lokalt i det här fallet mot löfte att inte titta på den när du försöker hacka den.)
De vill bara att du loggar in som superadmin för att se om dina säkerhetsangrepp/hacks fungerar, inte för att hacka något när du är inloggad som superadmin!
(Om du fastnar: Eventuellt kan du tänja lite på regel 2 och gå in en gång och titta på hur gränssnittet ser ut för en superadmin och sedan logga ut igen.)

Absolut förbjudet
Du får inte:

Titta på eller ändra i källkoden för att få dina angrepp/hack att fungera.
Utmaning 1
Gör en XSS-attack som vanlig registrerad användare och som förstör för en superadmin så att denne direkt blir omdirigerad till https://expressen.se så fort hen loggat in

Utmaning 2
Försök gör en attack som “höjer” användarrollen på en vanlig user du registerat till superadmin.
(Den här typen av atttacker visar på att systemet har någon form av Broken Access Control).