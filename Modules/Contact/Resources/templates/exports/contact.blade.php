<body>
<table>
    <thead>
        <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Celular</th>
            <th>Operador Móvil</th>
            <th>Fecha fin de plan</th>
            <th>Acción</th>
            <th>Fecha</th>
            <th>Hora</th>
        </tr>
    </thead>
    <tbody>
    @foreach($records as $row)
    <tr>
        <td>{{ $row['number'] }}</td>
        <td>{{ $row['name'] }}</td>
        <td>{{ $row['email_1'] }}</td>
        <td>{{ $row['cellphone_1'] }}</td>
        <td>{{ $row['mobile_operator_name'] }}</td>
        <td>{{ $row['date_plan_end'] }}</td>
        <td>{{ $row['action_name'] }}</td>
        <td>{{ $row['date_of_action'] }}</td>
        <td>{{ $row['time_of_action'] }}</td>
    </tr>
    @endforeach
    </tbody>
</table>
</body>
