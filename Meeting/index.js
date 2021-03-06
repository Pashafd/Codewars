/*
    https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
    John has invited some friends. His list is:

    s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
    Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.
    When the last names are the same, sort them by first name. 
    Last name and first name of a guest come in the result between parentheses separated by a comma.

    So the result of function meeting(s) will be:

    "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
    It can happen that in two distinct families with the same family name two people have the same first name too.
*/

const meeting = s =>
    s
        .toUpperCase()
        .split(";")
        .sort((a, b) => {
            const guy1 = a.split(":");
            const guy2 = b.split(":");

            return guy1[1] === guy2[1]
                ? guy1[0].localeCompare(guy2[0])
                : guy1[1].localeCompare(guy2[1]);
        })
        .map(x => "(" + x.split(":").reverse().join(", ") + ")")
        .join("");

meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
);
