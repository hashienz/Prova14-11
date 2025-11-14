using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();


builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);

var app = builder.Build();

app.MapGet("/", () => "Enzo Ricardo Hashimoto");

//ENDPOINTS DE TAREFA
//GET: http://localhost:5273/api/tarefas/listar
app.MapGet("/api/tarefas/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Tarefas.Any())
    {
        return Results.Ok(ctx.Tarefas.ToList());
    }
    return Results.NotFound("Nenhuma tarefa encontrada");
});

//POST: http://localhost:5273/api/tarefas/cadastrar
app.MapPost("/api/tarefas/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Tarefa tarefa) =>
{
    ctx.Tarefas.Add(tarefa);
    ctx.SaveChanges();
    return Results.Created("", tarefa);
});

//PUT: http://localhost:5273/tarefas/alterar/{id}
// app.MapPut("/api/tarefas/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
// {
//     var tarefaExistente = ctx.Tarefas.Find(id){
//     if (tarefaExistente is null);
//     {
//         return Results.NotFound("Tarefa não encontrada.");
//     }
        
//     }

// });
app.MapPatch("/api/tarefas/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
{   
    Tarefa? resultado = ctx.Tarefas.Find(id);
    if (resultado is null)
    {
        return Results.NotFound("Produto não encontrado");
    }
    ctx.Tarefas.Update(resultado);
    ctx.SaveChanges();
    return Results.Ok(resultado);
});


//GET: http://localhost:5273/tarefas/naoconcluidas
app.MapGet("/api/tarefas/naoconcluidas", async ([FromServices] AppDataContext ctx) =>
{
    var tarefasNaoConcluidas = await ctx.Tarefas.Where(tarefa => tarefa.Concluida == false).ToListAsync();

    return Results.Ok(tarefasNaoConcluidas);
});


//GET: http://localhost:5273/tarefas/concluidas
app.MapGet("/api/tarefas/concluidas", ([FromServices] AppDataContext ctx) =>
{
    //Implementar a listagem de tarefas concluídas
});



app.UseCors("Acesso Total");


app.Run();
