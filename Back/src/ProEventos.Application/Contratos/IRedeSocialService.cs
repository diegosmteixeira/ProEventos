using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.Contratos
{
    public interface IRedeSocialService
    {
        Task AddRedeSocial(int eventoId, RedeSocialDto model, bool isEvento);
        Task<RedeSocialDto[]> SaveByEvento(int eventoId, RedeSocialDto[] model);
        Task<bool> DeleteByEvento(int eventoId, int redeSocialId);
        Task<RedeSocialDto[]> SaveByPalestrante(int palestranteId, RedeSocialDto[] model);
        Task<bool> DeleteByPalestrante(int palestranteId, int redeSocialId);
        Task<RedeSocialDto[]> GetAllByEventoIdAsync(int eventoId);
        Task<RedeSocialDto[]> GetAllByPalestranteIdAsync(int palestranteId);
        Task<RedeSocialDto> GetRedeSocialEventoByIdsAsync(int eventoId, int redeSocialId);
        Task<RedeSocialDto> GetRedeSocialPalestranteByIdsAsync(int palestranteId, int redeSocialId);

    }
}