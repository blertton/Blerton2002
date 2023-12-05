interface Intern {
    name: string;
    age: number;
    skills: string[];
}

interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: DomainType;
}

export enum DomainType {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  export interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string; 
  }