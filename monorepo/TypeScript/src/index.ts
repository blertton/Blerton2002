import { Company, DomainType} from "./types";

const myCompany: Company = {
  Interns: [
    { name: "Intern1", age: 20, skills: ["React", "HTML", "JS", "TypeScript"] },
    { name: "Intern2", age: 21, skills: ["Angular", "CSS", "JavaScript"] },
  ],
  Juniors: [
    {
      name: "Junior1",
      age: 25,
      skills: ["React", "Node.js", "MongoDB"],
      date_of_promotion: new Date("2022-01-01"),
      domain: DomainType.Web,
    },
    {
      name: "Junior2",
      age: 26,
      skills: ["Java", "Spring", "MySQL"],
      date_of_promotion: new Date("2022-02-01"),
      domain: DomainType.Backend,
    },
  ],
  Country: "Kosovo",
};

console.log(myCompany);
