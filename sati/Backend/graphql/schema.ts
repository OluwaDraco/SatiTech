// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
import SchemaBuilder from "@pothos/core";

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Job {
    id:          String    
  title:       String
  description: String
  skills:      [String]
  job_type:    String
  budget:      Float  
  duration:    String
  workload:    String
  client_id:   String
  rate:        Float  
  user_id:     String
  clients:     [String]  
  users:       [String] 
  }
#this is user defined ie defined by the freelancerx
  type Task{
    id: String
    title: String
    priority: String
    status:String
    due: Date
    reviewer: String

  }

  type Users {
    id:          String
  full_name:   String
  title:       String
  rate:        Float
  location:    String
  skills:      [String]
  overview:    String
  admin:       Boolean
  email:       String
  profile_url: String
  reviews:     [String]
  password:    String
  jobs:        [Job]
  tasks: [Task]    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    jobs: [Job]!
    users: [Users!]!
    task: [Task]!
  }
`;
