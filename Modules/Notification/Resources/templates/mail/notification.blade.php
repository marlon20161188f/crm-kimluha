<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>{{ $data['subject'] }}</title>
    <style>
        body {
            color: #000;
        }
        ul {
            list-style: none;
        }
    </style>
</head>
<body>
<p>Estimado(a) cliente:</p>
<br/>
<p>{{ $data['message'] }}</p>
<br/>
@if($data['file_path'])
<img src="{{ $data['file_path'] }}" style="max-width: 400px"/>
<br/>
@endif
<table>
    <tr>
        <td>
            <img src="{{ asset('images/kimluha.png') }}" style="max-width: 240px" />
        </td>
        <td>
            CORPORACIÓN KIMLUHA S.A.C.<br/>
            Distribuidor autorizado de Claro
        </td>
    </tr>
</table>
</body>
</html>
