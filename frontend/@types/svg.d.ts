declare module "*.svg" {
  import { DocumentNode } from "svg";
  const Schema: DocumentNode;

  export = Schema;
}
