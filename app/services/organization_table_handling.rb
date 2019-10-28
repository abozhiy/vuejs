class OrganizationTableHandling

  def initialize(params, organizations)
    @params = params
    @organizations = organizations
    @columns ||= columns
    @data ||= data
    @pagination ||= pagination
  end

  def response!
    {columns: @columns, data: data_per_page, pagination: @pagination}
  end

  private

  def data
    data = @organizations.sort_by { |row| row[@params['sortBy']] }
    data.reverse! if @params['descending']
    data.map! { |o| o.attributes.except('created_at', 'updated_at').merge(client_ids: o.clients.ids) }
  end

  def data_per_page
    start_row = (@params['page'] - 1) * @params['rowsPerPage']
    count = @params['rowsPerPage'] == 0 ? @data.count : @params['rowsPerPage']
    @data.slice(start_row...(start_row + count))
  end

  def pagination
    {
      sortBy: @params['sortBy'],
      descending: @params['descending'],
      page: @params['page'],
      rowsPerPage: @params['rowsPerPage'],
      rowsNumber: @data.count
    }
  end

  def columns
    [
      {name: 'id', label: 'Id', field: 'id', sortable: true},
      {name: 'name', label: 'Name', field: 'name', sortable: true},
      {name: 'org_type', label: 'Type', field: 'org_type', sortable: true},
      {name: 'inn', label: 'INN', field: 'inn', sortable: true},
      {name: 'ogrn', label: 'OGRN', field: 'ogrn', sortable: true},
      {name: 'client_ids', label: 'Client_ids', field: 'client_ids', sortable: true},
      {name: 'action', label: '', field: 'action'}
    ]
  end
end