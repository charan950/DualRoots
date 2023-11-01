using Dualroots.Models;

namespace Dualroots.Interfaces
{
    public interface IDesignService
    {
        Task<List<Design>> GetDesigns();
        Task<Design> GetDesignById();
        Task<bool> UpdateDesign(Design design);
        Task<bool> UpdateDesigns(List<Design> designs);
    }
}
