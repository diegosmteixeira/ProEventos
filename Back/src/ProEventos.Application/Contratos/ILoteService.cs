using System.Threading.Tasks;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.Contratos
{
    public interface ILoteService
    {
        Task AddLote(int eventoId, LoteDto model);
        Task<LoteDto[]> SaveLotes(int eventoId, LoteDto[] models);
        Task<bool> DeleteLote(int eventoId, int LoteId);
        Task<LoteDto[]> GetLotesByEventoIdAsync(int eventoId);
        Task<LoteDto> GetLoteByIdsAsync(int eventoId, int loteId);
    }
}