import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	const { searchParams } = new URL(req.url);
	const prodCategory = searchParams.get("category") || "";
	let productsList = [];
	let response = null;

	try {
		if (!prodCategory) {
			const productsDoc = []
			const q = query(collection(db, "products"), where("status", "==", "active"));
			await getDocs(q).then((snap) => {
				snap.forEach((doc) => {
					productsDoc.push(doc.data())
				})
			});
			productsDoc.forEach(product => productsList.push(product))
		} else {
			const productsDoc = []
			const q = query(collection(db, "products"), where("category", "==", prodCategory));
			await getDocs(q).then((snap) => {
				snap.forEach((doc) => {
					productsDoc.push(doc.data())
				})
			});
			productsDoc.forEach(product => productsList.push(product))
		}
		response = productsList;
	} catch (error) {
		response = error
	}

	return NextResponse.json(response);
}

