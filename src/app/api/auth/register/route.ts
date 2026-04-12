import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import connectToDatabase from '@/lib/db';

export async function POST(req: NextRequest){
    try{
        const {name,email,password}=await req.json()
        await connectToDatabase()
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({message:"User already exists"}, {status:400})
        }
         if(password.length<6){
            return NextResponse.json({message:"Password must be at least 6 characters long"}, {status:400})
        }



        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })
        return NextResponse.json({message:"User registered successfully"}, {status:201})
    }catch(error){
        return NextResponse.json({message:"Internal server error"}, {status:500})
    }
}