function AstryxTable({ id = 'astryx-table', caption, columns, rows }) {
  const [sort, setSort] = React.useState({ key: null, direction: 'ascending' });

  const sortedRows = React.useMemo(() => {
    if (!sort.key) return rows;
    return [...rows].sort((a, b) => {
      const left = String(a[sort.key] ?? '');
      const right = String(b[sort.key] ?? '');
      const result = left.localeCompare(right, 'ru', { numeric: true });
      return sort.direction === 'ascending' ? result : -result;
    });
  }, [rows, sort]);

  const toggleSort = key => {
    setSort(current => ({ key, direction: current.key === key && current.direction === 'ascending' ? 'descending' : 'ascending' }));
  };

  return (
    <table className="astryx-table" data-od-id={id}>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map(column => {
            const active = sort.key === column.key;
            const ariaSort = active ? sort.direction : 'none';
            return (
              <th key={column.key} scope="col" aria-sort={column.sortable ? ariaSort : undefined}>
                {column.sortable ? (
                  <button className="astryx-sort-button" type="button" onClick={() => toggleSort(column.key)} data-od-id={`${id}-sort-${column.key}`}>
                    <span>{column.label}</span><span aria-hidden="true">{active ? sort.direction === 'ascending' ? '↑' : '↓' : '↕'}</span>
                  </button>
                ) : column.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={row.id || index} data-od-id={`${id}-row-${row.id || index}`}>
            {columns.map(column => <td key={column.key} data-label={column.label}>{row[column.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

window.AstryxTable = AstryxTable;
