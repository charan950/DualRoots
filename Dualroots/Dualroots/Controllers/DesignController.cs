using Dualroots.Interfaces;
using Dualroots.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Dualroots.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignController : ControllerBase
    {
        private IDesignService DesignService { get; set; }
        public DesignController(IDesignService designService)
        {
            DesignService = designService;
        }
        // GET: api/<DesignController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var designes = await this.DesignService.GetDesigns();
            return Ok(designes);
        }

        // GET api/<DesignController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DesignController>
        [HttpPost]
        public async Task<IActionResult> Post(List<Design> designs)
        {
            try
            {
               var isUpdated=  await this.DesignService.UpdateDesigns(designs);
                return Ok(isUpdated);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<DesignController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Design design)
        {
            var isUpdated = await this.DesignService.UpdateDesign(design);
            return Ok(isUpdated);
        }

        // DELETE api/<DesignController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
