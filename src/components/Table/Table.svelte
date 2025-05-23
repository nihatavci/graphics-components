<!-- @component `Table` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-table--docs) -->
<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * A source for the data.
   * @type []
   * @required
   */
  export let data: [];

  /**
   * A title that runs above the table.
   * @type {string}
   */
  export let title: string | null = null;

  /**
   * A block of text that runs above the table.
   * @type {string}
   */
  export let dek: string | null = null;

  /**
   * A footnote that runs below the table.
   * @type {string}
   */
  export let notes: string | null = null;

  /**
   * A source line that runs below the table.
   * @type {string}
   */
  export let source: string | null = null;

  /**
   * list of the fields to include in the table. By default everything goes.
   * @type []
   */
  export let includedFields: string[] = Object.keys(data[0]).filter(
    (f) => f !== 'searchStr'
  );

  /**
   * Whether or not the table is cutoff after a set number of rows.
   * @type {boolean}
   */
  export let truncated: boolean = false;

  /**
   * If the table is truncated, how many rows to allow before the cutoff.
   * @type {number}
   */
  export let truncateLength: number = 5;

  /**
   * Whether or not the table is paginated after a set number of rows.
   * @type {boolean}
   */
  export let paginated: boolean = false;

  /**
   * The default page size.
   * @type {number}
   */
  export let pageSize: number = 25;

  /**
   * Whether or not searches are allowed.
   * @type {boolean}
   */
  export let searchable: boolean = false;

  /**
   * The placeholder text that appears in the search box.
   * @type {string}
   */
  export let searchPlaceholder: string = 'Search in table';

  /**
   * A field to offer uses as an interactive filter.
   * @type {string}
   */
  export let filterField: string;

  /**
   * The label to place above the filter box
   * @type {string}
   */
  export let filterLabel: string;

  /**
   * Whether or not sorts are allowed.
   * @type {boolean}
   */
  export let sortable: boolean = false;

  /**
   * The column to sort by. By default it's the first header.
   * @type {string}
   */
  export let sortField: string = Object.keys(data[0])[0];

  /**
   * The columns that are allowed to sort. It's all of them by default.
   * @type {string}
   */
  export let sortableFields: string[] = Object.keys(data[0]).filter(
    (f) => f !== 'searchStr'
  );

  /**
   * The direction of the sort. By default it's ascending.
   * @type {SortDirection}
   */
  type SortDirection = 'ascending' | 'descending';
  export let sortDirection: SortDirection = 'ascending';

  /**
   * Custom field formatting functions. Should be keyed to the name of the field.
   * @type {object}
   */
  export let fieldFormatters: object = {};

  /** Width of the component within the text well. */
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  export let width: ContainerWidth = 'normal';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  /** Import local helpers */
  import Block from '../Block/Block.svelte';
  import Pagination from './Pagination.svelte';
  import SearchInput from '../SearchInput/SearchInput.svelte';
  import Select from './Select.svelte';
  import SortArrow from './SortArrow.svelte';
  import { filterArray, paginateArray, getOptions } from './utils.js';

  /** Set truncate, filtering and pagination configuration */
  let showAll = false;
  let pageNumber = 1;
  let searchText = '';
  const filterList = filterField ? getOptions(data, filterField) : undefined;
  let filterValue = '';
  $: filteredData = filterArray(data, searchText, filterField, filterValue);
  $: sortedData = sortArray(filteredData, sortField, sortDirection);
  $: currentPageData =
    truncated ?
      showAll ? sortedData
      : sortedData.slice(0, truncateLength + 1)
    : paginated ? paginateArray(sortedData, pageSize, pageNumber)
    : sortedData;

  //* * Handle show all, search, filter, sort and pagination events */
  function toggleTruncate(_event) {
    showAll = !showAll;
  }

  function handleSearchInput(event) {
    searchText = event.detail.value;
    pageNumber = 1;
  }

  function handleFilterInput(event) {
    const value = event.detail.value;
    filterValue = value === 'All' ? '' : value;
    pageNumber = 1;
  }

  function handleSort(event) {
    if (!sortable) return;
    sortField = event.target.getAttribute('data-field');
    sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
  }

  function sortArray(array, column, direction) {
    if (!sortable) return array;
    return array.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'ascending' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return direction === 'ascending' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  function formatValue(item, field) {
    const value = item[field];
    if (field in fieldFormatters) {
      const func = fieldFormatters[field];
      return func(value);
    } else {
      return value;
    }
  }

  /** Boot it up. */
  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.forEach((d: any) => {
      // Compose the string we will allow users to search
      d.searchStr = includedFields
        .map((field) => d[field])
        .join(' ')
        .toLowerCase();
    });
  });
</script>

<Block {width} {id} class="fmy-6 {cls}">
  <article class="table-wrapper">
    {#if title || dek || searchable || filterList}
      <header class="table--header w-full">
        {#if title}
          <h3 class="table--header--title">{@html title}</h3>
        {/if}
        {#if dek}
          <p class="table--header--dek body-note">{@html dek}</p>
        {/if}
        {#if searchable || filterList}
          <nav class="input fmx-0 fmy-2">
            {#if filterList}
              <div class="table--header--filter">
                <Select
                  label="{filterLabel || filterField}"
                  options="{filterList}"
                  on:select="{handleFilterInput}"
                />
              </div>
            {/if}
            {#if searchable}
              <div class="table--header--search">
                <SearchInput
                  bind:searchPlaceholder
                  on:search="{handleSearchInput}"
                />
              </div>
            {/if}
          </nav>
        {/if}
      </header>
    {/if}
    <section class="table w-full">
      <table
        class="w-full"
        class:paginated
        class:truncated="{truncated &&
          !showAll &&
          data.length > truncateLength}"
      >
        <thead class="table--thead">
          <tr>
            {#each includedFields as field}
              <th
                scope="col"
                class="table--thead--th h4 pl-0 py-2 pr-2"
                class:sortable="{sortable && sortableFields.includes(field)}"
                class:sort-ascending="{sortable &&
                  sortField === field &&
                  sortDirection === 'ascending'}"
                class:sort-descending="{sortable &&
                  sortField === field &&
                  sortDirection === 'descending'}"
                data-field="{field}"
                on:click="{handleSort}"
              >
                {field}
                {#if sortable && sortableFields.includes(field)}
                  <div class="table--thead--sortarrow fml-1 avoid-clicks">
                    <SortArrow
                      bind:sortDirection
                      active="{sortField === field}"
                    />
                  </div>
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="table--tbody">
          {#each currentPageData as item, idx}
            <tr data-row-index="{idx}">
              {#each includedFields as field}
                <td
                  class="body-note pl-0 py-2 pr-2"
                  data-row-index="{idx}"
                  data-field="{field}"
                  data-value="{item[field]}"
                >
                  {@html formatValue(item, field)}
                </td>
              {/each}
            </tr>
          {/each}
          {#if searchable && searchText && currentPageData.length === 0}
            <tr>
              <td class="no-results" colspan="{includedFields.length}">
                No results found for "{searchText}"
              </td>
            </tr>
          {/if}
        </tbody>
        {#if notes || source}
          <tfoot class="table--tfoot">
            {#if notes}
              <tr>
                <td class="" colspan="{includedFields.length}">
                  <div class="fmt-2">
                    {@html notes}
                  </div>
                </td>
              </tr>
            {/if}
            {#if source}
              <tr>
                <td class="" colspan="{includedFields.length}">
                  <div class="fmt-1">
                    {@html source}
                  </div>
                </td>
              </tr>
            {/if}
          </tfoot>
        {/if}
      </table>
    </section>
    {#if truncated && data.length > truncateLength}
      <nav
        aria-label="Show all button"
        class="show-all flex items-center justify-center fmt-2"
      >
        <button class="body-caption" on:click="{toggleTruncate}"
          >{#if showAll}Show fewer rows{:else}Show {data.length -
              truncateLength} more rows{/if}</button
        >
      </nav>
    {/if}
    {#if paginated}
      <Pagination
        bind:pageNumber
        bind:pageSize
        bind:pageLength="{currentPageData.length}"
        bind:n="{sortedData.length}"
      />{/if}
  </article>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  section.table {
    overflow-x: auto;
  }
  section.table table {
    background-color: transparent;
    border-collapse: separate;
    border-spacing: 0;
    thead {
      tr {
        th {
          border-bottom: 1px solid var(--theme-colour-text-primary);
          @include mixins.bg;
          text-align: inherit;
          &.sortable {
            cursor: pointer;
            white-space: nowrap;
          }
          .table--thead--sortarrow {
            display: inline-block;
            position: relative;
            top: 5px;
          }
        }
      }
    }
    tbody {
      td {
        @include mixins.text-sm;
        @include mixins.font-regular;
        vertical-align: top;
        border-bottom: 1px solid
          var(--theme-colour-brand-rules, var(--tr-muted-grey));
        &.no-results {
          @include mixins.text-secondary;
        }
      }
    }
    tfoot.table--tfoot {
      tr {
        border-bottom: 0;
      }
      td {
        @include mixins.body-caption;
      }
    }
    &.truncated {
      tbody tr:last-child:not(:first-child) {
        border-bottom: none;
        mask-image: linear-gradient(
          to bottom,
          var(--theme-colour-text-primary) 0%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to bottom,
          var(--theme-colour-text-primary) 0%,
          transparent 100%
        );
      }
    }
  }

  .avoid-clicks {
    pointer-events: none;
  }

  nav.input {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    gap: clamp(0.31rem, calc(0.29rem + 0.1vw), 0.38rem);
  }

  nav.show-all {
    button {
      min-width: 13rem;
      height: 2.15rem;
      border: 1px solid var(--theme-colour-brand-rules, var(--tr-muted-grey));
      border-radius: 0.25rem;
      @include mixins.bg;
      cursor: pointer;
    }
  }
</style>
