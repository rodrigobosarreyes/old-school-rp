<script lang="ts">
	import type { TableColumn } from "./TableColumn";

  export let columns: TableColumn[];
  export let rows: any[];

  const sort = (col: TableColumn) => {
    let order = 0;
    if (col.sortOrder === 'asc') {
      order = 1;
      col.sortOrder = 'desc';
    } else if (col.sortOrder === 'desc') {
      order = -1;
      col.sortOrder = 'asc';
    } else {
      return;
    }
  
    const sortFunc = (a: any, b: any) => {
      const critA = a[col.prop];
      const critB = b[col.prop];

      if (typeof critA === 'string' && typeof critB === 'string') {
        return critA.localeCompare(critB) * order;
      }

      if (typeof critA === 'boolean' && typeof critB === 'boolean') {
          if (critA === critB) {
            return 0 * order;
          }
          if (critA) {
            return -1 * order;
          }
          return 1 * order;
      }

      if (typeof critA.compareTo === 'function' && typeof critB.compareTo === 'function') {
        return critA.compareTo(critB) * order;
      }

      return 0;
    }
    rows = rows.sort(sortFunc);
  };
</script>

<div class="xdd">
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          {#each columns as col}
            <th
              style:minWidth={col.minWidth}
              style:width={col.width}
              style:maxWidth={col.maxWidth}
              class:sortable={col.sortOrder} on:click={() => sort(col)}>{col.name}</th>
          {/each}
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0">
      <tbody>
        {#each rows as row, i}
          <tr>
            {#each columns as col}
              <td
                style:minWidth={col.minWidth}
                style:width={col.width}
                style:maxWidth={col.maxWidth}
              >
                <slot name="rowCell" col={col} row={row} value={row[col.prop]}>{row[col.prop]}</slot>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .xdd {
    background-color: black;
  }
  table{
    width:100%;
    table-layout: fixed;
  }
  .tbl-header{
    background-color: black;
    position: sticky;
    top: 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
  }
  .tbl-content{
    height:100vh;
    overflow-x:auto;
    margin-top: 0px;
    border-radius: 0 0 10px 10px;
  }
  th{
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    border-bottom: solid 1px rgba(255,255,255,0.3);
  }
  td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 300;
    color: #fff;
    border-bottom: solid 1px rgba(255,255,255,0.3);
  }

  div {
    box-sizing: border-box;
  }

  th {
    cursor: default;
  }

  .sortable {
    cursor: pointer;
  }
</style>
