import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

export function App() {
	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="border rounded-lg p-2">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Produto</TableHead>
							<TableHead>Preço</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map((_, index) => (
							<TableRow key={index}>
								<TableCell>{crypto.randomUUID()}</TableCell>
								<TableCell>Produto {(index + 1).toString().padStart(2, '0')}</TableCell>
								<TableCell>R$ 192,00</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
