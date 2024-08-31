import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Card from "./components/Card";

export default function App() {
	const [data, setData] = useState<
		{
			exchange_id: string;
			name: string;
			volume_1hrs_usd: number;
			volume_1day_usd: number;
		}[]
	>([]);

	useEffect(() => {
		fetch(
			"https://rest.coinapi.io/v1/exchanges?apiKey=A69C9BEF-0B4C-465E-A7CB-BE4C942D4D6B"
		)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<View>
			<Text className='pt-10 pb-2 border-b text-center text-2xl font-semibold'>
				Trading App
			</Text>
			<FlatList
				className='px-6 py-2'
				data={data}
				renderItem={({ item }) => {
					return (
						<Card
							exchange={item.name}
							volume1hr={item.volume_1hrs_usd}
							volume24hr={item.volume_1day_usd}
						/>
					);
				}}
				keyExtractor={(item) => item.exchange_id}
			/>
		</View>
	);
}
