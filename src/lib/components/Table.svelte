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
            <th class:sortable={col.sortOrder} on:click={() => sort(col)}>{col.name}</th>
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
              <td>{row[col.prop]}</td>
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
    background-color: rgba(255,255,255,0.3);
  }
  .tbl-content{
    height:300px;
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid rgba(255,255,255,0.3);
  }
  th{
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255,255,255,0.1);
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
