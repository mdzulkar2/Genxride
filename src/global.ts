import { connection } from "mongoose";

declare global{
   var  mongooseconn:{
        conn:connection | null,
        promise:Promise<connection> | null

    }
}
export{}