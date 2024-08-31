import { Text, TouchableOpacity, View } from "react-native";

interface CardProps {
	exchange: string;
	volume1hr: number;
	volume24hr: number;
}

export default function Card({ exchange, volume1hr, volume24hr }: CardProps) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return (
		<View className='border-2 rounded-lg px-6 py-4 mb-8'>
			<Text className='font-black text-3xl '>{exchange}</Text>
			<Text className='tabular-nums text-lg'>
				Vol. 1 hora: {formatter.format(volume1hr)}
			</Text>
			<Text className='tabular-nums text-lg'>
				Vol. 24 horas: {formatter.format(volume24hr)}
			</Text>
		</View>
	);
}

// const styles = StyleSheet.create({
// 	shadow: {
// 		shadowColor: "#000",
// 		shadowOffset: {
// 			width: 0,
// 			height: 3,
// 		},
// 		shadowOpacity: 0.1,
// 		shadowRadius: 4.65,
// 		elevation: 2,
// 	},
// });
