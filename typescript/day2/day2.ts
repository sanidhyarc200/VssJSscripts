interface IUserProfile {
    name: string;
    city: string;
    hobbies?: string[];
  }
  
  const userProfile: IUserProfile = {
    name: "Saurav",
    city: "Indore",
    // hobbies: ["cricket"],
  };
  
  userProfile.city = "Ratlam";
  
  const userProfiles: IUserProfile[] = [
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
  ];
  