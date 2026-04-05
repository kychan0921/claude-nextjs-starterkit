import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

/**
 * Table 컴포넌트 예제
 */
export function TableDemo() {
  return (
    <div className="space-y-8">
      {/* Basic Table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Table</h3>
        <Table>
          <TableCaption>Users list with their details</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Table with Striped Rows */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Table with Striped Rows</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { product: 'Laptop', price: 999, qty: 1, total: 999 },
              { product: 'Monitor', price: 299, qty: 2, total: 598 },
              { product: 'Keyboard', price: 79, qty: 1, total: 79 },
            ].map((row, i) => (
              <TableRow key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                <TableCell>{row.product}</TableCell>
                <TableCell className="text-right">${row.price}</TableCell>
                <TableCell className="text-right">{row.qty}</TableCell>
                <TableCell className="text-right">${row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
