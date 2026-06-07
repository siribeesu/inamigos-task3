import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Add document to the 'contacts' collection in Firestore
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp()
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error adding document: ", error);
    return NextResponse.json({ success: false, error: 'Failed to submit contact form.' }, { status: 500 });
  }
}
