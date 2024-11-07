The significance of union and intersection types in Typescript.

Union and intersection make flexible and robust of a code.
it can make choose easier to multiple types code 
for example: 
type admin {
   userId: number;
   name: string;
   gmail: string;
   secretKey: number;
}
type user {
    userId: number;
   name: string;
   gmail: string;
}
type isAdmin = admin | user;


hence easily amake another type to one and identify easily that who is admin or user .
so we say that union is fleexible type in typescript and make easier to write code .
