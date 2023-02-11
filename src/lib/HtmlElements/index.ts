import BlockQuote from './BlockQuote.svelte';
import H1 from './H1.svelte';
import H2 from './H2.svelte';
import H3 from './H3.svelte';
import H4 from './H4.svelte';
import H5 from './H5.svelte';
import H6 from './H6.svelte';
import Li from './Li.svelte';
import Ol from './Ol.svelte';
import P from './P.svelte';
import Table from './Table.svelte';
import TableBody from './TableBody.svelte';
import TableCell from './TableCell.svelte';
import TableHead from './TableHead.svelte';
import TableHeaderCell from './TableHeaderCell.svelte';
import TableRow from './TableRow.svelte';
import Ul from './Ul.svelte';
import Slot from './Slot.svelte';

export const htmlDefaultElements = {
	blockquote: BlockQuote,
	ul: Ul,
	ol: Ol,
	li: Li,
	p: P,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	table: Table,
	table_head: TableHead,
	table_body: TableBody,
	table_row: TableRow,
	table_cell: TableCell,
	table_header_cell: TableHeaderCell,
	list_item_child: Slot
};

export {
	BlockQuote,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TableHeaderCell
};
