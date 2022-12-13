<body>
<table>
    <tr>
        <td>Operador:</td>
        <td>{{ $operator_name }}</td>
    </tr>
</table>
<table>
    <thead>
        <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Celular</th>
            <th>Fecha</th>
            <th>Medio</th>
            <th>Comentario</th>
        </tr>
    </thead>
    <tbody>
    @foreach($records as $row)
    <tr>
        <td>{{ $row['number'] }}</td>
        <td>{{ $row['name'] }}</td>
        <td>{{ $row['email_1'] }}</td>
        <td>{{ $row['cellphone_1'] }}</td>
        <td>{{ $row['date_of_tracking'] }}</td>
        <td>{{ $row['action_name'] }}</td>
        <td>{{ $row['commentary'] }}</td>
    </tr>
    @endforeach
    </tbody>
</table>
</body>
