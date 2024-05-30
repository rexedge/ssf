interface simplifiedProduct {
	_id: string;
	imageUrl: string;
	price: number;
	slug: string;
	categoryName: string;
	name: string;
}

interface fullProduct {
	_id: string;
	images: any;
	price: number;
	slug: string;
	categoryName: string;
	name: string;
	description: string;
	price_id: string;
}
