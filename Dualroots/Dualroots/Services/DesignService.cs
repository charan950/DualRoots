using Dualroots.Context;
using Dualroots.Interfaces;
using Dualroots.Models;
using Microsoft.EntityFrameworkCore;

namespace Dualroots.Services
{
    public class DesignService : IDesignService
    {
        private DualRootsContext DualRootsContext { get; set; }
        public DesignService(DualRootsContext dualRootsContext) 
        { 
            DualRootsContext = dualRootsContext;
        }
        public Task<Design> GetDesignById()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Design>> GetDesigns()
        {
            try
            {
                var designs = await this.DualRootsContext.Designs.ToListAsync();
                return designs;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<Design>();
            }
        }

        public async Task<bool> UpdateDesign(Design design)
        {
            try
            {
                this.DualRootsContext.Designs.Update(design);
                await this.DualRootsContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> UpdateDesigns(List<Design> designs)
        {
            try
            {
                
                this.DualRootsContext.UpdateRange(designs);
                await this.DualRootsContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
